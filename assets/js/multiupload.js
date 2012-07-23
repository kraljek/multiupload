// Generated by CoffeeScript 1.3.3
(function() {
  var $, Multiupload;

  $ = this.jQuery;

  $.fn.multiupload = function() {
    return new Multiupload($(this));
  };

  Multiupload = (function() {

    function Multiupload(element) {
      var _ref,
        _this = this;
      this.element = element;
      this.element.addClass('dnd');
      this.render();
      this.enable_multiupload();
      if (((_ref = navigator.userAgent) != null ? _ref.toLowerCase().indexOf('webkit') : void 0) !== -1) {
        this.enable_drag();
      }
      this.element.closest('form').submit(function() {
        return _this.input.remove();
      });
    }

    Multiupload.prototype.render = function() {
      this.dropzone = $('<div class="dnd-dropzone" />').appendTo(this.element);
      this.input = this.element.find('input').appendTo(this.dropzone);
      this.input.prop('multiple', '').addClass('dnd-file');
      this.input.attr('size', '100%');
      $('<span>Click here or drag file to add as attachment</span>').prependTo(this.dropzone);
      return this.files = $('<ul class="dnd-filelist">').appendTo(this.element);
    };

    Multiupload.prototype.enable_drag = function() {
      var _this = this;
      this.element.addClass('dnd-dragenabled');
      this.dropzone.on('dragenter', function() {
        return _this.dropzone.addClass('dnd-dragging');
      });
      return this.dropzone.on('dragleave', function() {
        return _this.dropzone.removeClass('dnd-dragging');
      });
    };

    Multiupload.prototype.enable_multiupload = function() {
      var _this = this;
      return this.input.on('change', function(e) {
        _this.dropzone.removeClass('dnd-dragging');
        return _this.add_file($(e.target));
      });
    };

    Multiupload.prototype.add_file = function(file) {
      var filename;
      filename = file.val().split(/(\\|\/)/g).pop();
      this.input = file.clone();
      this.dropzone.append(this.input);
      this.enable_multiupload();
      return this.files.append($("<li>" + filename + "</li>").append(file, this.get_remove_link()));
    };

    Multiupload.prototype.get_remove_link = function(file) {
      return $('<a href="#" class="dnd-remove">Remove</a>').click(function() {
        if (confirm('Do you want to remove this attachment?')) {
          $(this).parent().remove();
        }
        return false;
      });
    };

    return Multiupload;

  })();

}).call(this);
