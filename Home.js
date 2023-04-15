import React from "react";
import items from "./items";

function Home(){

    return(
        <>
            <h1 className="text-center mt-3">All Items</h1>

            <section className="py-4 container">
                <div className="row justify-content-center">
                    <items img="" title="title" desc="description"/>
                </div>
            </section>
        </>

    );

}

export default Home;