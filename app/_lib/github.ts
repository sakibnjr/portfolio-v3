export interface GitHubStats {
  streak: number;
  publicRepos: number;
  totalContributions: number;
}

export async function getGitHubData(username: string = "sakibnjr"): Promise<GitHubStats> {
  let streak = 0;
  let publicRepos = 61;
  let totalContributions = 436;

  // 1. Fetch public repositories count from official GitHub REST API
  try {
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        "User-Agent": "portfolio-v3",
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 3600 },
    });

    if (userRes.ok) {
      const userData = await userRes.json();
      if (typeof userData?.public_repos === "number") {
        publicRepos = userData.public_repos;
      }
    }
  } catch (err) {
    console.error("Error fetching GitHub user data:", err);
  }

  // 2. Fetch contributions and calculate streak
  try {
    // Primary: fetch from official GitHub contribution calendar page
    const contribPageRes = await fetch(
      `https://github.com/users/${username}/contributions`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
        next: { revalidate: 3600 },
      }
    );

    if (contribPageRes.ok) {
      const html = await contribPageRes.text();
      const dayMap = new Map<string, number>();

      // Extract all calendar days with data-date and data-level attributes
      const dateRegex = /<td[^>]*data-date="(\d{4}-\d{2}-\d{2})"[^>]*data-level="(\d+)"/g;
      let match: RegExpExecArray | null;
      while ((match = dateRegex.exec(html)) !== null) {
        dayMap.set(match[1], parseInt(match[2], 10));
      }

      const altRegex = /<td[^>]*data-level="(\d+)"[^>]*data-date="(\d{4}-\d{2}-\d{2})"/g;
      while ((match = altRegex.exec(html)) !== null) {
        dayMap.set(match[2], parseInt(match[1], 10));
      }

      if (dayMap.size > 0) {
        const sortedDates = Array.from(dayMap.keys()).sort();
        const lastDate = sortedDates[sortedDates.length - 1];
        const checkDate = new Date(lastDate);
        const formatDate = (d: Date) => d.toISOString().split("T")[0];

        const todayLevel = dayMap.get(lastDate) || 0;
        let calculatedStreak = 0;

        if (todayLevel > 0) {
          calculatedStreak = 1;
          while (true) {
            checkDate.setDate(checkDate.getDate() - 1);
            const dStr = formatDate(checkDate);
            if ((dayMap.get(dStr) || 0) > 0) {
              calculatedStreak++;
            } else {
              break;
            }
          }
        } else {
          // If no contribution today yet, check yesterday to preserve active streak
          checkDate.setDate(checkDate.getDate() - 1);
          const yesterdayStr = formatDate(checkDate);
          if ((dayMap.get(yesterdayStr) || 0) > 0) {
            calculatedStreak = 1;
            while (true) {
              checkDate.setDate(checkDate.getDate() - 1);
              const dStr = formatDate(checkDate);
              if ((dayMap.get(dStr) || 0) > 0) {
                calculatedStreak++;
              } else {
                break;
              }
            }
          }
        }

        if (calculatedStreak > 0) {
          streak = calculatedStreak;
        }
      }
    }
  } catch (err) {
    console.error("Error fetching GitHub contribution page:", err);
  }

  // 3. Fallback / total contribution calculation via contributions API
  try {
    const apiRes = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}`,
      {
        headers: { "User-Agent": "portfolio-v3" },
        next: { revalidate: 3600 },
      }
    );

    if (apiRes.ok) {
      const data = await apiRes.json();

      if (data?.total && typeof data.total === "object") {
        totalContributions = Object.values(
          data.total as Record<string, number>
        ).reduce((sum: number, count: number) => sum + count, 0);
      }

      // If streak calculation from HTML failed, compute from API contributions
      if (streak === 0 && Array.isArray(data?.contributions)) {
        const dateMap = new Map<string, number>();
        for (const item of data.contributions) {
          if (item?.date) {
            dateMap.set(item.date, Number(item.count) || 0);
          }
        }

        const sortedDates = Array.from(dateMap.keys()).sort();
        if (sortedDates.length > 0) {
          // Find the latest date that is <= today
          const nowStr = new Date().toISOString().split("T")[0];
          const pastDates = sortedDates.filter((d) => d <= nowStr);
          const lastDate = pastDates[pastDates.length - 1] || sortedDates[sortedDates.length - 1];

          const checkDate = new Date(lastDate);
          const formatDate = (d: Date) => d.toISOString().split("T")[0];
          const todayCount = dateMap.get(lastDate) || 0;
          let calculatedStreak = 0;

          if (todayCount > 0) {
            calculatedStreak = 1;
            while (true) {
              checkDate.setDate(checkDate.getDate() - 1);
              const dStr = formatDate(checkDate);
              if ((dateMap.get(dStr) || 0) > 0) {
                calculatedStreak++;
              } else {
                break;
              }
            }
          } else {
            checkDate.setDate(checkDate.getDate() - 1);
            const yesterdayStr = formatDate(checkDate);
            if ((dateMap.get(yesterdayStr) || 0) > 0) {
              calculatedStreak = 1;
              while (true) {
                checkDate.setDate(checkDate.getDate() - 1);
                const dStr = formatDate(checkDate);
                if ((dateMap.get(dStr) || 0) > 0) {
                  calculatedStreak++;
                } else {
                  break;
                }
              }
            }
          }

          if (calculatedStreak > 0) {
            streak = calculatedStreak;
          }
        }
      }
    }
  } catch (err) {
    console.error("Error fetching fallback GitHub contributions:", err);
  }

  // Ensure minimum fallback values if all external calls fail
  return {
    streak: streak > 0 ? streak : 4,
    publicRepos,
    totalContributions,
  };
}
