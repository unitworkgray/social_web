import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import React from "react";


const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {

    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name="newMessageBody" placeholder="Введите свое сообщение" validate={[required, maxLength50]}/>
            </div>
            <button>Отправить сообщение</button>
        </form>)
}

export default reduxForm ({form: 'dialog_add_message_form'})(AddMessageForm);