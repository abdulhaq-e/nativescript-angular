import { AnimationPlayer } from "@angular/animations";
import { getPropertyByCssName } from "ui/styling/style-property";

import { NgView } from "../element-registry";
import { NativeScriptAnimationPlayer } from "./animation-player";
import { Keyframe } from "./utils";

export abstract class AnimationDriver {
    abstract animate(
        element: any,
        keyframes: Keyframe[],
        duration: number,
        delay: number,
        easing: string
    ): AnimationPlayer;
}

export class NativeScriptAnimationDriver implements AnimationDriver {
    computeStyle(element: NgView, prop: string): string {
        return element.style._getValue(getPropertyByCssName(prop));
    }

    animate(
        element: NgView,
        keyframes: Keyframe[],
        duration: number,
        delay: number,
        easing: string
    ): AnimationPlayer {
        return new NativeScriptAnimationPlayer(
            element, keyframes, duration, delay, easing);
    }
}
