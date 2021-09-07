import Head from "next/head"
import axios from "axios"
import { Dropdown } from "primereact/dropdown"
import { DataView, DataViewLayoutOptions } from "primereact/dataview"
import { useState } from "react"
import Navbar from "@/components/layout/navbar"
import RecipeeView from "@/components/recipee/filterRecipeeView"
import { areas } from "assets/filterData"

export default function Categories() {

    const [area, setArea] = useState()

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

    const getMeals = async (area) => {
        const data = await axios.post("/api/recipee/areas", { area })
        const meals = JSON.parse(JSON.stringify(data.data))
        setMeals(meals)
    }

    return (
        <>
            <Head>
                <title>The Recipees | Areas</title>
            </Head>
            <Navbar>
                <div className="p-d-flex p-flex-column p-jc-center">
                    <div className="p-mx-auto p-my-2">
                        <Dropdown
                            placeholder="Select a category"
                            value={area}
                            options={areas}
                            onChange={(e) => {
                                getMeals(e.value)
                                setArea(e.value)
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