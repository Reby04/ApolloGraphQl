import React, { useState } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Form, Radio, Button } from "antd";
import { Input } from "antd";

type bool = {
  bool: false;
};

type FormType = {
  name: string;
  code: string;
  title: string;
  description: string;
  flat: boolean;
  threshold: boolean;
  flexible: boolean;
  position: number;
  reportOverride: boolean;
  workflowStatus: number;
};

interface Props {
  dataForm: FormType;
  onSubmit: Function;
  setDataForm: Function;
}

export const FormApp: React.FC<Props> = ({
  dataForm,
  setDataForm,
  onSubmit
}) => {
  const [bool, setBool] = useState(false);

  return (
    <Form>
      <label>Name: </label>
      <Input
        name="name"
        value={dataForm.name}
        onChange={(event: any) => {
          setDataForm({
            ...dataForm,
            name: event.target.value
          });
        }}
      ></Input>
      <br></br>
      <label>Code:</label>
      <Input
        name="code"
        value={dataForm.code}
        onChange={(event: any) => {
          console.log(dataForm.name);
          setDataForm({
            ...dataForm,
            code: event.target.value
          });
        }}
      ></Input>
      <br></br>
      <label>Title: </label>
      <Input
        name="title"
        value={dataForm.title}
        onChange={(event: any) => {
          setDataForm({
            ...dataForm,
            title: event.target.value
          });
        }}
      ></Input>
      <br></br>
      <label>description: </label>
      <Input
        name="description"
        value={dataForm.description}
        onChange={(event: any) => {
          setDataForm({
            ...dataForm,
            description: event.target.value
          });
        }}
      ></Input>
      <br></br>
      <label>flat: </label>
      <Radio
        value={dataForm.flat}
        name="flat"
        defaultChecked={false}
        onChange={(value: any) => {
          setDataForm({
            ...dataForm,
            flat: value.target.checked
          });
        }}
      ></Radio>
      <br></br>
      <label>threshold </label>
      <Radio
        name="threshold"
        defaultChecked={false}
        value={dataForm.threshold}
        onChange={(value: any) => {
          setDataForm({
            ...dataForm,
            threshold: value.target.checked
          });
        }}
      ></Radio>
      <br></br>
      <label>flexible </label>
      <Radio
        name="flexible"
        value={dataForm.flexible}
        defaultChecked={false}
        onChange={(value: any) => {
          setDataForm({
            ...dataForm,
            flexible: value.target.checked
          });
        }}
      ></Radio>
      <br></br>
      <br></br>
      <Button
        type="primary"
        onClick={(e: any) => {
          onSubmit();
        }}
      >
        Aggiungi
      </Button>
    </Form>
  );
};
