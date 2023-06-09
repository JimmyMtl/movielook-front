import React from 'react';
import Head from "next/head";
import SignIn from "@components/05-Pages/Auth/SignIn/SignIn";

const Index = () => {
    return (
        <>
            <Head>
                <title>Sign In - MovieLook</title>
                <meta name="description" content="Sign In on MovieLook"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <SignIn/>
        </>
    );
};

export default Index;