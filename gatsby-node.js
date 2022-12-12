const path = require("path")

exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions ;
    const { data } = await graphql(`
    query{
        projects:allContentfulFemaidProject{
            edges{
                node{
                    slug
                }
            }
        }
    }
    `)



    data.projects.edges.forEach(({node}) =>{
        createPage({
            path: `/project/${node.slug}`,
            component: path.resolve("./src/templates/Project.js"),
            context:{
                slug: node.slug,
            }
        })
    })

}