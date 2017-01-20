﻿interface IAliveAgent {
    onTick(currentTime: number): void;
    onBackgroundTick(currentTime: number);
    onStart(mHandler: IManagersHandler): void;
    onActionReceived(actionName: string, jsonedData: string): void;
    onMove(oldX: number, oldY: number, newX: number, newY: number): void;
    onRelease(currentX: number, currentY: number): void;
    onPick(currentX: number, currentY: number): void;
    onMenuItemSelected(itemName: string): void;
    onConfigureMenuItems(menuBuilder: IMenuBuilder): void;
    onResponseReceived(response: string): void;
    onLocationReceived(location: IAliveLocation): void;
    onUserActivityStateReceived(state: IAliveUserActivity): void;
    onHeadphoneStateReceived(state: number): void;
    onWeatherReceived(weather: IAliveWeather): void;
    onPlacesReceived(places: IAlivePlaceLikelihood[]): void;
    onSpeechRecognitionResults(results: string): void;
};