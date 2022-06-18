AFRAME.registerComponent("meditation", {
  schema: {
    playing: { default: false },
  },
  events: {
    mouseenter: function (evt) {
      const playing = this.el.getAttribute("meditation").playing;
      if (playing) {
        this.el.setAttribute("material", {
          color: "#8fff8f",
        });
      } else {
        this.el.setAttribute("material", {
          color: "#ff8f8f",
        });
      }
    },
    mouseleave: function (evt) {
      const playing = this.el.getAttribute("meditation").playing;
      if (playing) {
        this.el.setAttribute("material", {
          color: "#00ff00",
        });
      } else {
        this.el.setAttribute("material", {
          color: "#ff0000",
        });
      }
    },
    click: function (evt) {
      const playing = this.el.getAttribute("meditation").playing;
      this.el.setAttribute("meditation", {
        playing: !playing,
      });
      NAF.utils.takeOwnership(this.el);
    },
  },
  update: function (oldData) {
    var data = this.data;
    if (data.playing) {
      this.el.setAttribute("material", {
        color: "#00ff00",
      });
      startMeditation();
    } else {
      this.el.setAttribute("material", {
        color: "#ff0000",
      });
      if (oldData.playing) {
        stopMeditation();
      }
    }
  },
});
