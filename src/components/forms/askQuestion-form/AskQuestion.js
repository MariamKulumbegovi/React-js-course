import { EmailInput } from "../../elements/email-input/EmailInput"
import { NameInput } from "../../elements/name-input/NameInput."
import { NumberInput } from "../../elements/number-input/NumberInput"
import {DepartmentDropdown} from "../../elements/Select-department-dropdown/DepartmentDropdown"

export const AskQuestion = () => {
    return(
    <form>
    <div className="box">
        <div className="field is-horizontal">
            <div class="field-label is-normal">
                    <label class="label">From</label>
            </div>
            <div className="field-body">
            <NameInput/>
            <EmailInput/>
            </div>
        </div>
        <NumberInput/>
        <DepartmentDropdown/>
        
           

            {/* <div class="field is-horizontal">
            <div class="field-label">
                <label class="label">Already a member?</label>
            </div>
            <div class="field-body">
                <div class="field is-narrow">
                <div class="control">
                    <label class="radio">
                    <input type="radio" name="member"/>
                    Yes
                    </label>
                    <label class="radio">
                    <input type="radio" name="member"/>
                    No
                    </label>
                </div>
                </div>
            </div>
            </div>

            <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Subject</label>
            </div>
            <div class="field-body">
                <div class="field">
                <div class="control">
                    <input class="input is-danger" type="text" placeholder="e.g. Partnership opportunity"/>
                </div>
                <p class="help is-danger">
                    This field is required
                </p>
                </div>
            </div>
            </div>

            <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Question</label>
            </div>
            <div class="field-body">
                <div class="field">
                <div class="control">
                    <textarea class="textarea" placeholder="Explain how we can help you"></textarea>
                </div>
                </div>
            </div>
            </div>

            <div class="field is-horizontal">
            <div class="field-label">
                
            </div>
            <div class="field-body">
                <div class="field">
                <div class="control">
                    <button class="button is-danger">
                    Send message
                    </button>
                </div>
                </div>
            </div>
            </div> */}
    </div>
    </form>
    )
}