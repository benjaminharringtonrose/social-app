import React, { FC } from 'react';
import { View } from 'react-native';

import { Size } from '../../constants';

const ItemSeparator: FC = () => <View style={{ height: Size.gutter }} />

export default ItemSeparator;