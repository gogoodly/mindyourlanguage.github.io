        jQuery(document).ready(function($){
            var slider = $.fn.fsvs({
                autoPlay            : false,
                speed               : 1000,
                bodyID              : 'fsvs-body',
                selector            : '> .slide',
                mouseSwipeDisance   : 40,
                afterSlide          : function(){},
                beforeSlide         : function(){},
                endSlide            : function(){},
                mouseWheelEvents    : true,
                mouseWheelDelay     : false,
                mouseDragEvents     : true,
                touchEvents         : true,
                arrowKeyEvents      : true,
                pagination          : false,
                nthClasses          : 2,
                detectHash          : true
            });
        });