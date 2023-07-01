import A from "./A";
import Head from "next/head";


const Maincontainer = ({children}) => {
    return (
        <>
            <Head>
                <meta keywords="users, users list"></meta> //мета теги, ключевый слова 
                <title>Main page</title>
            </Head>
            <div>
                <A href={"/"} text="Main"></A>
                <A href={"/users"} text="Users"></A>
            </div>
            <div>
                {children}
            </div>
        </>
    )
}

export default Maincontainer;