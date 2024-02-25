import { createReducer } from "@reduxjs/toolkit";
import cloneDeep from 'lodash.clonedeep';
import { allTransfers, directTransfer, oneTransfer, threeTransfer, twoTransfer } from "./checkboxAction";

const getInitialState = () => {
  return {
    transferParams: {
      all: false,
      direct: false,
      oneStop: false,
      twoStops: false,
      threeStops: false
    }
  };
}

const checkInstallationOfAllTransfers = (transferParams) => {
  const { direct, oneStop, twoStops, threeStops } = transferParams;
  transferParams.all = direct && oneStop && twoStops && threeStops;
  return transferParams;
}

const setAllTransfers = (transferParams) => {
  return {
    transferParams: {
      all: !transferParams.all,
      direct: !transferParams.all,
      oneStop: !transferParams.all,
      twoStops: !transferParams.all,
      threeStops: !transferParams.all
    }
  };
}

const setTransferParam = (key, transferParams) => {
  const cloneTransferParams = cloneDeep(transferParams);
  cloneTransferParams[key] = !cloneTransferParams[key];
  return {
    transferParams: checkInstallationOfAllTransfers(cloneTransferParams)
  };
}

const checkboxReducer = createReducer(getInitialState(), (builder) => {
  builder
    .addCase(allTransfers.type, (state, _) => {
      return setAllTransfers(state.transferParams);
    })
    .addCase(directTransfer.type, (state, _) => {
      return setTransferParam('direct', state.transferParams);
    })
    .addCase(oneTransfer.type, (state, _) => {
      return setTransferParam('oneStop', state.transferParams);
    })
    .addCase(twoTransfer.type, (state, _) => {
      return setTransferParam('twoStops', state.transferParams);
    })
    .addCase(threeTransfer.type, (state, _) => {
      return setTransferParam('threeStops', state.transferParams);
  });
});

export default checkboxReducer;
