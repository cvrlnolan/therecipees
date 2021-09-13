import React from "react"
import Image from "next/image"
import { Button } from "primereact/button"
import { Card } from "primereact/card"
import { Dialog } from "primereact/dialog"
import { useState } from "react"

const RecipeeView = ({ recipee, layout }) => {

    const [display, setDisplay] = useState(false)

    if (layout === "list") {
        return (
            <>
                <div className="p-col-12 p-p-5">
                    <div className="p-d-flex p-flex-column p-flex-md-row">
                        <div
                            className="box"
                            style={{
                                width: "150px",
                                height: "150px",
                                position: "relative"
                            }}
                        >
                            <Image
                                src={recipee.strMealThumb}
                                alt={recipee.strMeal}
                                className="recipee-list-img"
                                width="150px"
                                height="150px"
                                objectFit="cover"
                            />
                        </div>
                        <div className="p-jc-between p-ml-md-5">
                            <div className="p-d-flex p-flex-column p-my-2">
                                <div className="recipee-name p-text-left p-text-nowrap p-text-truncate">
                                    {recipee.strMeal}
                                </div>
                                <div className="p-d-inline">
                                    <i className="pi pi-tag recipee-category-icon" />
                                    <span className="p-text-nowrap p-text-truncate">
                                        {recipee.strCategory}
                                    </span>
                                </div>
                            </div>
                            <div className="p-d-flex p-my-2">
                                <Button
                                    icon="pi pi-info-circle"
                                    label="Show recipe"
                                    onClick={() => setDisplay(true)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Dialog
                    header={recipee.strMeal}
                    visible={display}
                    onHide={() => setDisplay(false)}
                    style={{ width: "50vw" }}
                    breakpoints={{ "960px": "75vw", "640px": "100vw" }}
                >
                    <Ingredients recipee={recipee} />
                    {recipee.strInstructions}
                </Dialog>
            </>
        )
    }

    if (layout === "grid") {
        return (
            <>
                <div className="p-col-12 p-md-4 p-p-3">
                    <Card className="p-p-2">
                        <div className="p-d-flex p-flex-column">
                            <div className="p-jc-center">
                                <div className="p-d-inline p-jc-center">
                                    <i className="pi pi-tag recipee-category-icon" />
                                    <span className="p-text-center p-text-nowrap p-text-truncate">
                                        {recipee.strCategory}
                                    </span>
                                </div>
                                <div className="p-d-flex p-flex-column p-my-3">
                                    <div
                                        className="box p-mx-auto"
                                        style={{
                                            width: "150px",
                                            height: "150px",
                                            position: "relative"
                                        }}
                                    >
                                        <Image
                                            src={recipee.strMealThumb}
                                            alt={recipee.strMeal}
                                            className="recipee-grid-img"
                                            width="150px"
                                            height="150px"
                                            objectFit="cover"
                                        />
                                    </div>
                                    <div
                                        className="recipee-name p-text-center p-text-nowrap p-text-truncate"
                                    >
                                        {recipee.strMeal}
                                    </div>
                                </div>
                                <div className="p-d-flex p-jc-center">
                                    <Button
                                        icon="pi pi-info-circle"
                                        label="Show recipe"
                                        onClick={() => setDisplay(true)}
                                    />
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
                <Dialog
                    header={recipee.strMeal}
                    visible={display}
                    onHide={() => setDisplay(false)}
                    style={{ width: "50vw" }}
                    breakpoints={{ "960px": "75vw", "640px": "100vw" }}
                >
                    <Ingredients recipee={recipee} />
                    {recipee.strInstructions}
                </Dialog>
            </>
        )
    }
}

const Ingredients = ({ recipee }) => {
    return (
        <>
            <p className="p-text-center">
                <span className="p-text-bold">Ingredients: </span>
                {recipee.strIngredient1 !== "" && recipee.strIngredient1 + "-" + recipee.strMeasure1 + "\n\r"}
                {recipee.strIngredient2 !== "" && recipee.strIngredient2 + "-" + recipee.strMeasure2 + "\n\r"}
                {recipee.strIngredient3 !== "" && recipee.strIngredient3 + "-" + recipee.strMeasure3 + "\n\r"}
                {recipee.strIngredient4 !== "" && recipee.strIngredient4 + "-" + recipee.strMeasure4 + "\n\r"}
                {recipee.strIngredient5 !== "" && recipee.strIngredient5 + "-" + recipee.strMeasure5 + "\n\r"}
                {recipee.strIngredient6 !== "" && recipee.strIngredient6 + "-" + recipee.strMeasure6 + "\n\r"}
                {recipee.strIngredient7 !== "" && recipee.strIngredient7 + "-" + recipee.strMeasure7 + "\n\r"}
                {recipee.strIngredient8 !== "" && recipee.strIngredient8 + "-" + recipee.strMeasure8 + "\n\r"}
                {recipee.strIngredient9 !== "" && recipee.strIngredient9 + "-" + recipee.strMeasure9 + "\n\r"}
                {recipee.strIngredient10 !== "" && recipee.strIngredient10 + "-" + recipee.strMeasure10 + "\n\r"}
                {recipee.strIngredient11 !== "" && recipee.strIngredient11 + "-" + recipee.strMeasure11 + "\n\r"}
                {recipee.strIngredient12 !== "" && recipee.strIngredient12 + "-" + recipee.strMeasure12 + "\n\r"}
                {recipee.strIngredient13 !== "" && recipee.strIngredient13 + "-" + recipee.strMeasure13 + "\n\r"}
                {recipee.strIngredient14 !== "" && recipee.strIngredient14 + "-" + recipee.strMeasure14 + "\n\r"}
                {recipee.strIngredient15 !== "" && recipee.strIngredient15 + "-" + recipee.strMeasure15 + "\n\r"}
                {recipee.strIngredient16 !== "" && recipee.strIngredient16 + "-" + recipee.strMeasure16 + "\n\r"}
                {recipee.strIngredient17 !== "" && recipee.strIngredient17 + "-" + recipee.strMeasure17 + "\n\r"}
                {recipee.strIngredient18 !== "" && recipee.strIngredient18 + "-" + recipee.strMeasure18 + "\n\r"}
                {recipee.strIngredient19 !== "" && recipee.strIngredient19 + "-" + recipee.strMeasure19 + "\n\r"}
                {recipee.strIngredient20 !== "" && recipee.strIngredient20 + "-" + recipee.strMeasure20 + "\n\r"}
            </p>
        </>
    )
}

export default RecipeeView