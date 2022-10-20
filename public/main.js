const path = require("path")
const fs = require("fs")

const dirPath = path.join(__dirname, "../content")
// const dirPathPages = path.join(__dirname, "../src/pages/content")
let postlist = []
// let pagelist = []

const getPosts = () => {
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            return console.log("Failed to list contents of directory: " + err)
        }
        files.forEach((file, i) => {
            let obj = {}
            let post
            fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
                const getMetadataIndices = (acc, elem, i) => {
                    if (/^---/.test(elem)) {
                        acc.push(i)
                    }
                    return acc
                }
                const parseMetadata = ({lines, metadataIndices}) => {
                    if (metadataIndices.length > 0) {
                        let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1])
                        metadata.forEach(line => {
                            obj[line.split(": ")[0]] = line.split(": ")[1]
                        })
                        return obj
                    }
                }
                const parseContent = ({lines, metadataIndices}) => {
                    if (metadataIndices.length > 0) {
                        lines = lines.slice(metadataIndices[1] + 1, lines.length)
                    }
                    return lines.join("\n")
                }
                const lines = contents.split("\n")
                const metadataIndices = lines.reduce(getMetadataIndices, [])
                const metadata = parseMetadata({lines, metadataIndices})
                const content = parseContent({lines, metadataIndices})
                const date = new Date(metadata.date)
                const timestamp = date.getTime() / 1000
                post = {
                    id: timestamp,
                    title: metadata.title ? metadata.title : "No title given",
                    author: metadata.author ? metadata.author : "No author given",
                    date: metadata.date ? metadata.date : "No date given",
                    content: content ? content : "No content given",
                }
                postlist.push(post)
                if (i === files.length - 1) {
                    const sortedList = postlist.sort ((a, b) => {
                        return a.id < b.id ? 1 : -1
                    })
                    let data = JSON.stringify(sortedList)
                    fs.writeFileSync("src/posts.json", data)
                }
                
            })
        })
    })
    return 
}
// const getPages = () => {
//     fs.readdir(dirPathPages, (err, files) => {
//         if (err) {
//             return console.log("Failed to list contents of directory: " + err)
//         }
//         files.forEach((file, i) => {
//             let page
//             fs.readFile(`${dirPathPages}/${file}`, "utf8", (err, contents) => { 
//                 page = {
//                     content: contents
//                 }
//                 pagelist.push(page)
//                 let data = JSON.stringify(pagelist)
//                 fs.writeFileSync("src/pages.json", data)
//             })
//         })
//     })
//     return 
// }

getPosts()
// getPages()