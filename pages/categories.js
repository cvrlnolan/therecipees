import React from "react"
import Head from "next/head"
import axios from "axios"
import { Dropdown } from "primereact/dropdown"
import { DataView, DataViewLayoutOptions } from "primereact/dataview"
import { useState } from "react"
import Navbar from "@/components/layout/navbar"
import RecipeeView from "@/components/recipee/filterRecipeeView"
import { categories } from "assets/filterData"

export default function Categories() {

    const [category, setCategory] = useState()

    const [meals, setMeals] = useState(null)

    const [layout, setLayout] = useState("grid");

    const renderHeader = () => {
        return (
            <div className="p-grid p-nogutter">
                <div className="p-col-12" style={{ textAlign: "right" }}>
                    <DataViewLayoutOptions
                        layout={layout}
                        onChange={(e) => setLayout(e.value)}
                    />
                </div>
            </div>
        );
    }

    const itemTemplate = (meal, layout) => {
        if (!meal) {
            return;
        }

        if (layout === "list")
            return <RecipeeView recipee={meal} layout="list" />
        else if (layout === "grid")
            return <RecipeeView recipee={meal} layout="grid" />
    }

    const header = renderHeader()

    const getMeals = async (category) => {
        try {
            const data = await axios.post("/api/recipee/categories", { category })
            const meals = await JSON.parse(JSON.stringify(data.data))
            setMeals(meals)
        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <>
            <Head>
                <title>The Recipees | Categories</title>
            </Head>
            <Navbar>
                <div className="p-d-flex p-flex-column p-jc-center">
                    <div className="p-mx-auto p-my-2">
                        <Dropdown
                            placeholder="Select a category"
                            value={category}
                            options={categories}
                            onChange={(e) => {
                                getMeals(e.value)
                                setCategory(e.value)
                            }
                            }
                        />
                    </div>
                    <div className="p-ac-center p-my-2 box">
                        <DataView
                            value={meals}
                            layout={layout}
                            header={header}
                            itemTemplate={itemTemplate}
                        />
                    </div>
                </div>
            </Navbar>
        </>
    )
}