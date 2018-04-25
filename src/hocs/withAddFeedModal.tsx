import * as React from "react";
import { AddModal } from "../components/addModal";

export interface State {
  visible?: boolean;
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
            visibleModal={function() {
              this.setState({ visible: true } as State);
            }}
          />
          <AddModal
            {...this.props as any}
            close={function() {
              this.setState({ visible: false } as State);
            }}
            isVisible={this.state.visible}
          />
        </div>
      );
    }
  };
