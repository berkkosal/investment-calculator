import { useState } from "react"

export default function UserInput({onTest, userData}) {

    return (

        <section id="user-input">
            <div className="input-group">
                <p>
                    <label> Initial Investment </label>
                    <input
                        type="number"
                        required
                        value={userData.initialInvestment}
                        onChange={
                            (event) => onTest('initialInvestment', event.target.value)
                        }
                    />
                </p>
                <p>
                    <label> Annual Investment</label>
                    <input
                        type="number"
                        required
                        value={userData.annualInvestment}
                        onChange={
                            (event) => onTest('annualInvestment', event.target.value)
                        }
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label> Expected Return </label>
                    <input
                        type="number"
                        required
                        value={userData.expectedReturn}
                        onChange={
                            (event) => onTest('expectedReturn', event.target.value)
                        }
                    />

                </p>
                <p>
                    <label> Duration</label>
                    <input
                        type="number"
                        required
                        value={userData.duration}
                        onChange={
                            (event) => onTest('duration', event.target.value)
                        }
                    />
                </p>
            </div>
        </section>

    )
}
