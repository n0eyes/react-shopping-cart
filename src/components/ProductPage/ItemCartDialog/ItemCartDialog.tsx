import React from 'react';
import { Dialog } from 'react-tiny-dialog';
import SHOPPING_CART from '../../../assets/png/cart-icon.png';
import { Product } from '../../../types/products';
import { Button } from '../../common/Button/Button.styles';
import QuantityStepper from '../../common/QuantityStepper/QuantityStepper';
import * as S from './ItemCartDialog.styles';

interface ItemCartDialogProps extends Pick<Product, 'id' | 'name' | 'price'> {}

const ItemCartDialog: React.FC<ItemCartDialogProps> = (props) => {
  const { id, name, price } = props;
  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <S.CartButton>
          <S.CartImg alt="cart" src={SHOPPING_CART} />
        </S.CartButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.BackDrop />
        <Dialog.Content>
          <S.Box>
            <S.Name>{name}</S.Name>
            <S.Price>{price.toLocaleString()} 원</S.Price>
            <QuantityStepper />
            <Button size="M" view="black">
              추가하기
            </Button>
          </S.Box>
          <Dialog.Close />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
};

export default ItemCartDialog;
