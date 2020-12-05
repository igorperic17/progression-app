import * as React from 'react';
import { StackScreenProps } from '@react-navigation/stack'

export const navigationRef = React.createRef();
export const isReadyRef = React.createRef<boolean>();

export function navigate(name: string, params: any) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current?.navigate(name, params);
  }
}
