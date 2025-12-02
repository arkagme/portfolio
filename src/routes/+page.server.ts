// import type { PageServerLoad } from './$types';
// import { GITHUB_TOKEN } from '$env/static/private';

// export const load: PageServerLoad = async ({setHeaders}) => {
//     setHeaders({
//         'Cache-Control': 'public, max-age=3600'
//     });
    
//   try {
//     const response = await fetch('https://katib.jasoncameron.dev/v2/commits/latest?username=arkagme', {
//       headers: {
//         'Authorization': `Bearer ${GITHUB_TOKEN}`
//       }
//     });

//     if (!response.ok) {
//       console.error('Failed to fetch Github data:', response.statusText);
//       // Fallback data as requested by user
//     //   return {
//     //     github: {
//     //       "commits": [
//     //         {"repo":"arkagme/portfolio-svelte","additions":161,"deletions":44,"commitUrl":"https://github.com/arkagme/portfolio-svelte/commit/2353fd7fb4076927d2dc8838d9fd7dc2693cfd54","committedDate":"2025-11-29T08:26:53Z","oid":"2353fd7","messageHeadline":"home screen UI changes","messageBody":""},
//     //         {"repo":"arkagme/portfolio-svelte","additions":3260,"deletions":0,"commitUrl":"https://github.com/arkagme/portfolio-svelte/commit/054891296d1d0a5bd7c14cd329fd0e885dcb7c8e","committedDate":"2025-11-29T03:55:53Z","oid":"0548912","messageHeadline":"first push","messageBody":""},
//     //         {"repo":"arkagme/sda-iot-gsm-gps-bus-tracking-app","additions":0,"deletions":12,"commitUrl":"https://github.com/arkagme/sda-iot-gsm-gps-bus-tracking-app/commit/7d2a65fc3aa4d58f76331f8f74d89097bc810252","committedDate":"2025-11-27T11:14:49Z","oid":"7d2a65f","messageHeadline":"readme changes","messageBody":""},
//     //         {"repo":"arkagme/sda-iot-gsm-gps-bus-tracking-app","additions":12921,"deletions":0,"commitUrl":"https://github.com/arkagme/sda-iot-gsm-gps-bus-tracking-app/commit/4db8339dda401af2e5d22e03669392fee2e289dd","committedDate":"2025-11-27T11:13:26Z","oid":"4db8339","messageHeadline":"pushing frontend and backend","messageBody":""},
//     //         {"repo":"arkagme/saral-iiith-theme2","additions":181,"deletions":0,"commitUrl":"https://github.com/arkagme/saral-iiith-theme2/commit/e0b55fad28be470fca8ce78ca2e6fb8fc66be28b","committedDate":"2025-11-20T12:34:00Z","oid":"e0b55fa","messageHeadline":"added readme , script for starting , .env template and gitignore","messageBody":""}
//     //       ],
//     //       "languages": [
//     //         {"size":382007,"name":"JavaScript","color":"#f1e05a"},
//     //         {"size":73978,"name":"Astro","color":"#ff5a03"},
//     //         {"size":60980,"name":"Python","color":"#3572A5"},
//     //         {"size":40909,"name":"HTML","color":"#e34c26"},
//     //         {"size":30332,"name":"CSS","color":"#663399"},
//     //         {"size":29949,"name":"Svelte","color":"#ff3e00"},
//     //         {"size":29522,"name":"TypeScript","color":"#3178c6"},
//     //         {"size":16448,"name":"Stylus","color":"#ff6347"},
//     //         {"size":1176,"name":"Shell","color":"#89e051"}
//     //       ]
//     //     }
//     //   };
//     }

//     const githubData = await response.json();
//     return { github: githubData };
//   } catch (error) {
//     console.error('Error fetching Github data:', error);
//     // Fallback data on error
//     return {
//       github: {
//         "commits": [
//           {"repo":"arkagme/portfolio-svelte","additions":161,"deletions":44,"commitUrl":"https://github.com/arkagme/portfolio-svelte/commit/2353fd7fb4076927d2dc8838d9fd7dc2693cfd54","committedDate":"2025-11-29T08:26:53Z","oid":"2353fd7","messageHeadline":"home screen UI changes","messageBody":""},
//           {"repo":"arkagme/portfolio-svelte","additions":3260,"deletions":0,"commitUrl":"https://github.com/arkagme/portfolio-svelte/commit/054891296d1d0a5bd7c14cd329fd0e885dcb7c8e","committedDate":"2025-11-29T03:55:53Z","oid":"0548912","messageHeadline":"first push","messageBody":""},
//           {"repo":"arkagme/sda-iot-gsm-gps-bus-tracking-app","additions":0,"deletions":12,"commitUrl":"https://github.com/arkagme/sda-iot-gsm-gps-bus-tracking-app/commit/7d2a65fc3aa4d58f76331f8f74d89097bc810252","committedDate":"2025-11-27T11:14:49Z","oid":"7d2a65f","messageHeadline":"readme changes","messageBody":""},
//           {"repo":"arkagme/sda-iot-gsm-gps-bus-tracking-app","additions":12921,"deletions":0,"commitUrl":"https://github.com/arkagme/sda-iot-gsm-gps-bus-tracking-app/commit/4db8339dda401af2e5d22e03669392fee2e289dd","committedDate":"2025-11-27T11:13:26Z","oid":"4db8339","messageHeadline":"pushing frontend and backend","messageBody":""},
//           {"repo":"arkagme/saral-iiith-theme2","additions":181,"deletions":0,"commitUrl":"https://github.com/arkagme/saral-iiith-theme2/commit/e0b55fad28be470fca8ce78ca2e6fb8fc66be28b","committedDate":"2025-11-20T12:34:00Z","oid":"e0b55fa","messageHeadline":"added readme , script for starting , .env template and gitignore","messageBody":""}
//         ],
//         "languages": [
//           {"size":382007,"name":"JavaScript","color":"#f1e05a"},
//           {"size":73978,"name":"Astro","color":"#ff5a03"},
//           {"size":60980,"name":"Python","color":"#3572A5"},
//           {"size":40909,"name":"HTML","color":"#e34c26"},
//           {"size":30332,"name":"CSS","color":"#663399"},
//           {"size":29949,"name":"Svelte","color":"#ff3e00"},
//           {"size":29522,"name":"TypeScript","color":"#3178c6"},
//           {"size":16448,"name":"Stylus","color":"#ff6347"},
//           {"size":1176,"name":"Shell","color":"#89e051"}
//         ]
//       }
//     };
//   }
// };


// src/routes/+page.server.ts
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ setHeaders }) => {
  setHeaders({
    'Cache-Control': 'public, max-age=3600'
  });

  // return fast fallback data only; no external fetch here
  return {
    github: {
      commits: [
        {
          repo: 'arkagme/portfolio-svelte',
          additions: 161,
          deletions: 44,
          commitUrl:
            'https://github.com/arkagme/portfolio-svelte/commit/2353fd7fb4076927d2dc8838d9fd7dc2693cfd54',
          committedDate: '2025-11-29T08:26:53Z',
          oid: '2353fd7',
          messageHeadline: 'home screen UI changes',
          messageBody: ''
        },
        // ...rest of your fallback commits
      ],
      languages: [
        { size: 382007, name: 'JavaScript', color: '#f1e05a' },
        // ...rest of your fallback languages
      ]
    }
  };
};

