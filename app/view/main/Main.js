/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MiniProfile.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'MiniProfile.view.main.MainController',
        'MiniProfile.view.main.MainModel'
    ],

    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'panel',
        bind: {
            title: 'Mini Profile'
        },
        region: 'west',
        html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
        width: 250,
        split: true,
        tbar: [{
            text: 'Arielle Jazmine Roque',
            listeners: {
                afterrender: function(me) {
                    Ext.tip.QuickTipManager.register({
                        width:350,
                        autoHide : false,
                        closable : true,
                        draggable: false,
                        target: me.getId(),
                        text: '<img src="images/profile.jpg" style="position:absolute;width:131px;height:120px;"/>' +
                        '<div style="position:absolute;left:150px;top:14px;width:302px;height:112px;"><B><a href="#">Arielle Jazmine Leysa</a></B><br>100 Followers</div><br><br><br><br><br><br><br><br>'
                    });
                }
            }
        }]
    },{
        region: 'center',
        xtype: 'tabpanel',
        items:[{
            title: 'Tab 1',
            html: '<h2>Content appropriate for the current navigation.</h2>'
        }]
    }]
});
