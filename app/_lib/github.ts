export interface GitHubStats {
  streak: number;
  publicRepos: number;
  totalContributions: number;
}

export async function getGitHubData(username: string = "sakibnjr"): Promise<GitHubStats> {
  try {
    const [contribRes, userRes] = await Promise.allSettled([
      fetch(`https://github-contributions-api.jogruber.de/v4/${username}`, {
        next: { revalidate: 3600 },
      }),
      fetch(`https://api.github.com/users/${username}`, {
        next: { revalidate: 3600 },
      }),
    ]);

    let streak = 7;
    let publicRepos = 64;
    let totalContributions = 467;

    if (contribRes.status === "fulfilled" && contribRes.value.ok) {
      const data = await contribRes.value.json();
      if (data?.total && typeof data.total === "object") {
        totalContributions = Object.values(data.total as Record<string, number>).reduce(
          (sum: number, count: number) => sum + count,
          0
        );
      }
      if (Array.isArray(data?.contributions)) {
        let currentStreak = 0;
        const rev = [...data.contributions].reverse();
        for (const item of rev) {
          if (item.count > 0) currentStreak++;
          else if (currentStreak > 0) break;
        }
        if (currentStreak > 0) streak = currentStreak;
      }
    }

    if (userRes.status === "fulfilled" && userRes.value.ok) {
      const userData = await userRes.value.json();
      if (typeof userData?.public_repos === "number") {
        publicRepos = userData.public_repos;
      }
    }

    return {
      streak,
      publicRepos,
      totalContributions,
    };
  } catch {
    return { streak: 7, publicRepos: 64, totalContributions: 467 };
  }
}
