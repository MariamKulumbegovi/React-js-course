export const logGroup=(content,title="")=>{
    console.group(title)
    console.group(content)
    console.groupEnd()
}