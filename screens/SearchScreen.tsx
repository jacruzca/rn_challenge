import * as React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { cocktailList } from '../redux/actions/CocktailListActions';
import { IRootState } from '../redux/reducers';
import { ICocktail } from '../redux/types/CocktailTypes';

interface DispatchProps {
  cocktailListCheck: (term: string) => void;
}

interface StateProps {
  cocktails?: ICocktail[];
}

type Props = StateProps & DispatchProps;

class SearchScreen extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    props.cocktailListCheck('vodka');
  }

  public render() {
    return (
      <View><Text>Hola</Text></View>
    );
  }
}

const mapStateToProps = (root: IRootState): StateProps => {
  return {
    cocktails: root.cocktails.cocktails,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>
): DispatchProps => {
  return {
    cocktailListCheck: async (term: string) => {
      await dispatch(cocktailList(term));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchScreen);
