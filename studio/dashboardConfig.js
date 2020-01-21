export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5e2682f24ac52dbe85c7b284',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-zkg8jrtv',
                  apiId: '711cb731-486b-49ed-8a67-bc272837c726'
                },
                {
                  buildHookId: '5e2682f36174b7dc7b7e3c28',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-4gs45bde',
                  apiId: 'f6906758-0ea6-4c7f-a98a-b6b565a1e2d7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/the-dusky/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-4gs45bde.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
