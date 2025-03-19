import { PageProps } from "$fresh/server.ts";




export default (props: PageProps) => {
    const Component = props.Component
    return (
        <div>
            <header class="layout">
                <h1>Welcome to our dictionary</h1>
                <a href="/">
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 12L12 3L21 12"/>
                        <path d="M6 12V21H18V12"/>
                    </svg>
                </a>
            </header>

            <Component/>
        </div>
        
    )
}