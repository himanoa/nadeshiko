import * as React from "react";
import {
  Field,
  Label,
  Control,
  Input,
  Button,
  Modal,
  ModalCard,
  ModalCardHeader,
  ModalCardBody,
  ModalCardFooter,
  ModalCardTitle,
  ModalBackground,
  ModalClose,
  Delete
} from "bloomer";

export const AddModal = () => (
  <Modal>
    <ModalBackground />
    <ModalCard>
      <ModalCardHeader>
        <ModalCardTitle>Add feed</ModalCardTitle>
        <Delete />
      </ModalCardHeader>
      <ModalCardBody>
        <Field>
          <Label>Feed title</Label>
          <Control>
            <Input type="text" />
          </Control>
        </Field>
        <Field>
          <Label>Feed URL</Label>
          <Control>
            <Input type="text" />
          </Control>
        </Field>
        <Field>
          <Label>Crawl Interval(minute)</Label>
          <Control>
            <Input type="text" />
          </Control>
        </Field>
      </ModalCardBody>
      <ModalCardFooter>
        <Field isGrouped>
          <Control>
            <Button isColor="primary">Submit</Button>
          </Control>
          <Control>
            <Button>Cancel</Button>
          </Control>
        </Field>
      </ModalCardFooter>
    </ModalCard>
    <ModalClose />
  </Modal>
);
