const vizUrls = {
    "release-trend_apple": "https://public.tableau.com/views/release-trend_apple/viz",
    "release-trend_google": "https://public.tableau.com/views/release-trend_google/viz",
    "apple-appstore-download-by-categories": "https://public.tableau.com/views/apple-appstore-download-by-categories/viz",
    "google-playstore-download-by-categories": "https://public.tableau.com/views/google-playstore-download-by-categories/viz",
    "2018-pisa-score-map": "https://public.tableau.com/views/2018-pisa-score-map/viz",
    "pisa-ranking-change-top-20": "https://public.tableau.com/views/pisa-ranking-change-top-20/viz",
    "pisa-ranking-change-per-subject-top-5": "https://public.tableau.com/views/pisa-ranking-change-per-subject-top-5/viz",
    "educational-app-prevalence-and-pisa-score": "https://public.tableau.com/views/educational-app-prevalence-and-pisa-score/viz",
    "game-app-prevalence-and-pisa-score": "https://public.tableau.com/views/game-app-prevalence-and-pisa-score/viz",
    "score-and-internet-use-weekday-at-school": "https://public.tableau.com/views/score-and-internet-use-weekday-at-school/viz",
    "score-and-internet-use-weekday-outside-school": "https://public.tableau.com/views/score-and-internet-use-weekday-outside-school/viz",
    "score-and-internet-use-weekend-outside-school": "https://public.tableau.com/views/score-and-internet-use-weekend-outside-school/viz",
    "all-score-and-internet-use-weekday-outside-school": "https://public.tableau.com/views/all-score-and-internet-use-weekday-outside-school/viz",
    "all-score-and-internet-use-weekend-outside-school": "https://public.tableau.com/views/all-score-and-internet-use-weekend-outside-school/viz",
    "vert-score-and-playing-games": "https://public.tableau.com/views/vert-score-and-playing-games/viz",
    "vert-score-and-fun": "https://public.tableau.com/views/vert-score-and-fun/viz",
    "vert-score-and-comm": "https://public.tableau.com/views/vert-score-and-comm/viz",
    "vert-score-and-info": "https://public.tableau.com/views/vert-score-and-info/viz",
    "hist-score-and-all": "https://public.tableau.com/views/hist-score-and-all/viz",
    "age-of-first-comp-use-and-pisa-score": "https://public.tableau.com/views/age-of-first-comp-use-and-pisa-score/viz",
    "hist-age-of-first-comp-use-and-pisa-score": "https://public.tableau.com/views/hist-age-of-first-comp-use-and-pisa-score/viz",
    "age-of-first-internet-access-and-pisa-score": "https://public.tableau.com/views/age-of-first-internet-access-and-pisa-score/viz",
    "hist-age-of-first-internet-access-and-pisa-score": "https://public.tableau.com/views/hist-age-of-first-internet-access-and-pisa-score/viz",
};


const initViz = () => {
    const containers = document.getElementsByClassName("vizContainer");
    for (let i = 0; i < containers.length; i++) {
        const container = containers[i];
        const url = Object.entries(vizUrls)[i][1];
        options = {hideTabs: true};
        const viz = new tableau.Viz(container, url, options);
    }
};