import * as React from "react";
import { AddModal } from "../components/addModal";

export interface State {
  visible: boolean;
}

export interface Props {}
export const withAddFeedModal = InnerComponent =>
  class extends React.Component<Props, State> {
    state: State = { visible: false };
    props: Props;
    constructor(props: Props) {
      super(props);
    }
    render(): JSX.Element {
      return (
        <div>
          <InnerComponent
            visibleModal={() => {
              this.setState({ visible: true } as State);
            }}
          />
          <AddModal
            visible={this.state.visible}
            close={() => this.setState({ visible: false })}
          />
        </div>
      );
    }
  };
