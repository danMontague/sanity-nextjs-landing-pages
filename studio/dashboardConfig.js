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
                  buildHookId: '61c53102338fb0078a5adae5',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-q5n2f5pc',
                  apiId: '2cc04514-5225-4169-a7eb-8dcadd5b4f2f'
                },
                {
                  buildHookId: '61c53103fa1ce4acbc596a60',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-t3pbj3ia',
                  apiId: '885f73e7-0a05-4cde-a581-eac8c1f4f48a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/danMontague/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-t3pbj3ia.netlify.app', category: 'apps'}
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
