let $ = {};

function _createModal(options) {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.insertAdjacentHTML('afterbegin', `
    <div class="modal__overlay">
                <div class="modal__window">
                    <div class="modal__header">
                        <span class="modal__title">Заголовок</span>
                        <button class="modal__close">&times</button>
                    </div>
                    <div class="modal__body">
                        Хотите, чтоб это всплывающее окно и дальше вам надоедало?
                        Это можно устроить.
                    </div>
                    <div class="modal__footer">
                        <button>Ок</button>
                        <button>Нет</button>
                    </div>
                </div>
            </div>`)
  document.body.appendChild(modal);
  return modal;
}

$.modal = function (options) {
  const $modal = _createModal(options);

  return {
    open() {
      $modal.classList.add('open');
    },
    close() {
      $modal.classList.remove('open');
    },
    destroy() { }
  }
}
$.modal();

const modal = $.modal();