
<div id="viewImage" class="modal fade" data-backdrop="static" data-width="viewingImage.modalSize" data-keyboard="false">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i></button>
        <h4 class="modal-title">@{{ viewingImage.name }}</h4>
    </div>
    <div class="modal-body text-center" style="padding: 0;">
        <img style="border:5px #edece5 solid;" :width="viewingImage.size" :src="viewingImage.uri" />
    </div>
</div>