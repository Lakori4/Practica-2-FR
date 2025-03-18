import { PageProps } from "$fresh/server.ts";




export default (props: PageProps) => {
    const Component = props.Component
    return (
        <div>
            <h1>Welcome to our dictionary</h1>
            <Component/>
        </div>
        
    )
}