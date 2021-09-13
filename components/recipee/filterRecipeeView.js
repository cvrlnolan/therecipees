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
                    <div className="p-text-center">
                        Go to recipees to find instructions on how to prepare this meal.
                    </div>
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
                    <div className="p-text-center">
                        Go to recipees to find instructions on how to prepare this meal.
                    </div>
                </Dialog>
            </>
        )
    }
}

export default RecipeeView