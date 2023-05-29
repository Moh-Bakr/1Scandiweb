<script>

    $(document).ready(function () {
        const formMapping = {
            'DVD': {
                show: ['#dvd-form'],
                hide: ['#book-form', '#furniture-form'],
                clear: ['weight', 'height', 'width', 'length']
            },
            'Book': {
                show: ['#book-form'],
                hide: ['#dvd-form', '#furniture-form'],
                clear: ['size', 'height', 'width', 'length']
            },
            'Furniture': {
                show: ['#furniture-form'],
                hide: ['#dvd-form', '#book-form'],
                clear: ['size', 'weight']
            }
        };

        $('#productType').change(function () {
            const selectedType = $(this).val();

            Object.values(formMapping).forEach((form) => {
                form.show.forEach((selector) => $(selector).toggleClass('d-none', form !== formMapping[selectedType]));
                form.hide.forEach((selector) => $(selector).addClass('d-none'));
            });

            clearFormFields(formMapping[selectedType].clear);
        });

        function clearFormFields(fields) {
            fields.forEach((field) => $('#' + field).val(0));
        }
    });

</script>
