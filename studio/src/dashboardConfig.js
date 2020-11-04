export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fa23e0355aa877bdfe9e039',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-6333-studio',
                  apiId: '3c2446ca-b86d-45fa-a744-b6c1ccf2db26'
                },
                {
                  buildHookId: '5fa23e03944623011a01db30',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-6333',
                  apiId: '040e4098-5db2-4aee-a49b-8f2101ca3d05'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/evenwestvang/sanity-gatsby-blog-6333',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-6333.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
