import { useRecoilValue, useSetRecoilState } from 'recoil';
import { cartState, getCartItemById } from '../../../recoil/cart';
import { Dialog } from 'react-tiny-dialog';
import SHOPPING_CART from '../../../assets/png/cart-icon.png';
import { Product } from '../../../types/products';
import { Button } from '../../common/Button/Button.styles';
import QuantityStepper from '../../common/QuantityStepper/QuantityStepper';
import * as S from './ItemCartDialog.styles';
import { useRef } from 'react';

type ItemCartDialogProps = Product;

const ItemCartDialog: React.FC<ItemCartDialogProps> = (props) => {
  const { id, name, price, imageUrl } = props;
  const setCart = useSetRecoilState(cartState);
  const quantityRef = useRef<HTMLInputElement>(null);
  const hasItemInCart = Boolean(useRecoilValue(getCartItemById(id)));

  const addItemToCart = () => {
    const quantity = Number(quantityRef.current!.value);

    setCart((cart) => {
      if (hasItemInCart) {
        return cart.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [
        ...cart,
        { id, quantity, product: { id, name, price, imageUrl } },
      ];
    });
  };

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
            <S.Thumbnail src={imageUrl} alt={name} />
            <S.Name>{name}</S.Name>
            <S.Price>{price.toLocaleString()} 원</S.Price>
            <QuantityStepper ref={quantityRef} label="item-quantity" />
            <Dialog.Close asChild onClick={addItemToCart}>
              <Button size="M" view="black">
                추가하기
              </Button>
            </Dialog.Close>
          </S.Box>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
};

export default ItemCartDialog;
