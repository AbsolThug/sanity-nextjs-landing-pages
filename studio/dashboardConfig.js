export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60e9e3a3f3ff0956cc3a62ca',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-p28diq7v',
                  apiId: '19c93c7b-e020-4e96-a8ce-1f7f11da4f74'
                },
                {
                  buildHookId: '60e9e3a45a85354b958e0665',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ir2ffymw',
                  apiId: 'ba3a176b-235c-4b10-8c84-ad935bdc83b2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AbsolThug/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ir2ffymw.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
