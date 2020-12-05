import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ImageSourcePropType, ViewStyle } from "react-native";
import Song from "../data/Song";

export type NavigationParamTypes = {
    AddSongScreen: { song: Song } | undefined,
    SongListScreen: { filter: { title: string | undefined, artist: string | undefined } } | undefined,
    SongScreen: { song: Song }
}

// SongScreen

export type SongScreenRouteProp = RouteProp<NavigationParamTypes, "SongScreen">;
export type SongScreenNavigationProp = StackNavigationProp<NavigationParamTypes, "SongScreen">;

export type SongScreenProps = {
    route: SongScreenRouteProp,
    navigation: SongScreenNavigationProp
}


// BottomBarNavigation

export interface BottomBarNavigationDelegate {
    didPressNavigationButton: (index: number) => void
}

export type BottomBarNavigationProps = {
    currentIndex: number,
    delegate: BottomBarNavigationDelegate,
    style?: ViewStyle
}

// BottomBarNavigationButton

export interface BottomBarNavigationState {
    currentIndex: number
}

export interface BottomBarNavigationButtonDelegate {
    navigationButtonPressed: (index: number) => void
}

export type BottomBarNavigationButtonProps = {
    index: number,
    style?: any,
    image: ImageSourcePropType,
    delegate: BottomBarNavigationButtonDelegate
}

// TODO: Implement the rest of the screens

// export default { SongScreenProps, NavigationParamTypes };