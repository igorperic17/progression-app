import * as React from 'react';
import { StackScreenProps } from '@react-navigation/stack'
import { NavigationContainerRef } from '@react-navigation/native';

export const navigationRef = React.createRef<NavigationContainerRef>();
export const isReadyRef = React.createRef<boolean | null>();

export function navigate(name: string, params: any) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current?.navigate(name, params);
  }
}
