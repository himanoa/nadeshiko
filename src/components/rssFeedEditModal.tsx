import * as React from "react";

import { withFeedState } from "../hocs/withFeedState";
import { State as FeedState } from "../reducers/feed";

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
  Delete
} from "bloomer";

type State = {
  title: string;
  url: string;
  interval: string;
};

export interface Props {
  visible: boolean;
  close: () => void;
}

class RssFeedModalComponent extends React.Component<
  Props & any,
  State & FeedState
> {
  state: State & FeedState;
  props: Props & any;
  constructor(props: Props & any) {
    super(props);
    this.setState({
      title: this.props.state.name,
      url: this.props.state.url,
      interval: this.props.state.updateInterval
    });
    this.handleInput = this.handleInput.bind(this);
    this.render = this.render.bind(this);
    this.clicked = this.clicked.bind(this);
  }

  handleInput(event) {
    if (Object.keys(this.state).includes(event.target.name)) {
      this.setState({
        ...this.state,
        ...{ [event.target.name]: event.target.value }
      });
    }
  }

  clicked() {
    console.dir(this.props);
    this.props.actions.updateFeed(
      this.state.title,
      this.state.url,
      parseInt(this.state.interval, 10) * 60 * 1000 // 分をミリ秒に変換している
    );
    this.props.close();
  }

  render(): JSX.Element {
    return (
      <Modal isActive={this.props.visible} {...this.props}>
        <ModalBackground />
        <ModalCard>
          <ModalCardHeader>
            <ModalCardTitle>Add feed</ModalCardTitle>
            <Delete onClick={this.props.close} />
          </ModalCardHeader>
          <ModalCardBody>
            <Field>
              <Label>Feed title</Label>
              <Control>
                <Input type="text" name="title" onChange={this.handleInput} />
              </Control>
            </Field>
            <Field>
              <Label>Feed URL</Label>
              <Control>
                <Input type="text" name="url" onChange={this.handleInput} />
              </Control>
            </Field>
            <Field>
              <Label>Crawl Interval(minute)</Label>
              <Control>
                <Input
                  type="number"
                  name="interval"
                  onChange={this.handleInput}
                  value={this.state.interval}
                />
              </Control>
            </Field>
          </ModalCardBody>
          <ModalCardFooter>
            <Field isGrouped={true}>
              <Control>
                <Button isColor="primary" onClick={this.clicked}>
                  Submit
                </Button>
              </Control>
              <Control>
                <Button onClick={this.props.close}>Cancel</Button>
              </Control>
            </Field>
          </ModalCardFooter>
        </ModalCard>
      </Modal>
    );
  }
}
export const EditRssFeedModal = withFeedState(RssFeedModalComponent);
