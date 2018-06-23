import * as React from "react";
import { AddRssFeedModal } from "../components/rssFeedAddModal";

export interface State {
  addVisible: boolean;
  editVisible: boolean;
}

export interface Props {}
export const withFeedModal = InnerComponent =>
  class extends React.Component<Props, State> {
    state: State = {
      addVisible: false,
      editVisible: false
    };
    props: Props;
    constructor(props: Props) {
      super(props);
    }
    updateEditModal(visible: Boolean, id: number): void {
      this.setState({ ...this.state, ...{ editVisible: visible } } as State);
    }

    updateAddModal(visible: Boolean): void {
      this.setState({ ...this.state, ...{ addVisible: visible } } as State);
    }

    render(): JSX.Element {
      return (
        <div>
          <InnerComponent
            updateEditModal={this.updateEditModal.bind(this, true)}
            updateAddModal={this.updateAddModal.bind(this, true)}
          />
          <AddRssFeedModal
            visible={this.state.addVisible}
            close={this.updateAddModal.bind(this, false)}
          />
        </div>
      );
    }
  };
