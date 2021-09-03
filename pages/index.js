import Head from "next/head"
import axios from "axios"
import { InputText } from "primereact/inputtext"
import { DataView, DataViewLayoutOptions } from "primereact/dataview"
import { useState } from "react"
import Navbar from "@/components/layout/navbar"
import RecipeeView from "@/components/recipee/recipeeView"

export default function Home() {

  const [value, setValue] = useState({
    search: ""
  })

  const [layout, setLayout] = useState("grid");

  const [meals, setMeals] = useState(null)

  const search = async (searchVal) => {
    if (searchVal !== "") {
      try {
        const data = await axios.post("/api/recipee/search", { searchVal })
        const results = JSON.parse(JSON.stringify(data.data))
        console.log(results)
        setMeals(results)
      } catch (e) {
        console.log(e.message)
      }
    }
  }

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


  return (
    <>
      <Head>
        <title>The Recipees</title>
      </Head>
      <Navbar>
        <div className="p-d-flex p-flex-column p-jc-center">
          <div className="p-mx-auto p-my-2">
            <span className="p-input-icon-left">
              <i className="pi pi-search" />
              <InputText
                placeholder="Search recipee..."
                type="text"
                value={value.search}
                onChange={
                  (e) => {
                    search(e.target.value)
                    setValue({ search: e.target.value })
                  }
                }
                style={{ width: "350px" }}
              />
            </span>
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
