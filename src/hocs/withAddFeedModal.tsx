import * as React from "react";
import { AddRssFeedModal } from "../components/rssFeedAddModal";

export interface State {
  visible: boolean;
}

export interface Props {}
export const withFeedModal = InnerComponent =>
  class extends React.Component<Props, State> {
    state: State = { visible: false };
    props: Props;
    constructor(props: Props) {
      super(props);
    }
    updateVisible(visible: Boolean): void {
      this.setState({ visible } as State);
    }
    render(): JSX.Element {
      return (
        <div>
          <InnerComponent visibleModal={this.updateVisible.bind(this, true)} />
          <AddRssFeedModal
            visible={this.state.visible}
            close={this.updateVisible.bind(this, false)}
          />
        </div>
      );
    }
  };
