import { Body, Button, Card, CardItem, Container, Content, Header, Icon, Input, Item, Right, Spinner, Text } from 'native-base';
import * as React from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { cocktailList, cocktailListSuccess } from '../redux/actions/CocktailListActions';
import { IRootState } from '../redux/reducers';
import { ICocktail } from '../redux/types/CocktailTypes';

interface State {
  term: string;
}

interface DispatchProps {
  cocktailListCheck: (term: string) => void;
  cocktailListReset: () => void;
}

interface StateProps {
  cocktails?: ICocktail[];
  isLoading: boolean;
}

type Props = StateProps & DispatchProps;

class SearchScreen extends React.Component<Props, State> {
  public static navigationOptions = {
    header: null,
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      term: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  public handleChange(term: string) {
    this.setState({ term });
    if (term.length >= 3) {
      this.props.cocktailListCheck(term);
    }
  }

  public render() {
    const { cocktails, isLoading } = this.props;
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input
              placeholder="Search"
              onChangeText={this.handleChange}
              value={this.state.term}
            />
            <Icon name="drink" type="Entypo" />
          </Item>
          <Right style={{ flex: 0.35 }}>
            <Button transparent onPress={this.clear}>
              <Text>Clear</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          {isLoading && <Spinner color="blue" />}
          {cocktails &&
            cocktails.map(cocktail => this.displayCocktail(cocktail))}
        </Content>
      </Container>
    );
  }

  private clear = ()=>{
      this.handleChange('')
      this.props.cocktailListReset()
  }

  private displayCocktail = (cocktail: ICocktail) => {
    return (
      <Card key={cocktail.idDrink}>
        <CardItem>
          <Body>
            <Text>{cocktail.strDrink}</Text>
          </Body>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{ uri: cocktail.strDrinkThumb }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
      </Card>
    );
  };
}

const mapStateToProps = (root: IRootState): StateProps => {
  return {
    cocktails: root.cocktails.cocktails,
    isLoading: root.cocktails.isLoading,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>
): DispatchProps => {
  return {
    cocktailListCheck: async (term: string) => {
      await dispatch(cocktailList(term));
    },
    cocktailListReset: async () => {
      await dispatch(cocktailListSuccess([]));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchScreen);
