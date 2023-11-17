import React, { useRef, useEffect } from "react";
import * as PIXI from "pixi.js";

const Game: React.FC<{ imageUrl: string }> = ({ imageUrl }) => {
  const gameCanvas = useRef<HTMLDivElement>(null);

  const onDragStart = (event) => {
    event.currentTarget.data = event.data;
    event.currentTarget.dragging = true;
  };

  const onDragEnd = (event) => {
    event.currentTarget.dragging = false;
    event.currentTarget.data = null;
  };

  const onDragMove = (event) => {
    if (event.currentTarget.dragging) {
      const newPosition = event.currentTarget.data.getLocalPosition(
        event.currentTarget.parent
      );
      event.currentTarget.x = newPosition.x;
      event.currentTarget.y = newPosition.y;
    }
  };

  useEffect(() => {
    if (gameCanvas.current) {
      const app = new PIXI.Application({
        width: 800,
        height: 600,
        backgroundColor: 0x1099bb,
      });
      gameCanvas.current.appendChild(app.view as Node);

      const sprite = PIXI.Sprite.from(imageUrl);
      sprite.anchor.set(0.5);
      sprite.x = app.screen.width / 2;
      sprite.y = app.screen.height / 2;
      sprite.interactive = true;

      sprite
        .on("pointerdown", onDragStart)
        .on("pointerup", onDragEnd)
        .on("pointerupoutside", onDragEnd)
        .on("pointermove", onDragMove);

      app.stage.addChild(sprite);

      return () => {
        sprite.destroy();
        app.destroy(true);
      };
    }
  }, [imageUrl]);

  return <div ref={gameCanvas}></div>;
};

export default Game;
