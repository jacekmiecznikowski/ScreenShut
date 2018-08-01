//ScreenShut Applet By Jacek Miecznikowski
const Applet = imports.ui.applet;
const Util = imports.misc.util;

function MyApplet(orientation, panel_height, instance_id) {
    this._init(orientation, panel_height, instance_id);
}

MyApplet.prototype = {
    __proto__: Applet.IconApplet.prototype,

    _init: function(orientation, panel_height, instance_id) {
        Applet.IconApplet.prototype._init.call(this, orientation, panel_height, instance_id);
        this.set_applet_icon_symbolic_name("applets-screenshooter-symbolic");
        this.set_applet_tooltip(_("Screenshut"));
    },

    on_applet_clicked: function() {
        Util.spawnCommandLine("sh -c 'sleep 0.05; gnome-screenshot -a -c'");
    }
};

function main(metadata, orientation, panel_height, instance_id) {
    return new MyApplet(orientation, panel_height, instance_id);
}