import { 
    createBunny, 
    getFamilies, 
    checkAuth, 
    logout 
} from '../fetch-utils.js';

const form = document.querySelector('.bunny-form');
const logoutButton = document.getElementById('logout');

form.addEventListener('submit', async e => {
    e.preventDefault();

    // prevent default
    const bunnyForm = new FormData(form);
    console.log(bunnyForm.get('family-id')); 
    await createBunny({
        name: bunnyForm.get('bunny-name'),
        family_id: bunnyForm.get('family-id'),
    });
    // get the name and family id from the form

    // use createBunny to create a bunny with this name and family id
    window.location.href = '/families';
    form.reset();
});

window.addEventListener('load', async () => {
    // let's dynamically fill in the families dropdown from supabase
    // grab the select HTML element from the DOM
    const familyId = document.getElementById('family-id');
    // go get the families from supabase
    const families = await getFamilies();

    // for each family
    for (let family of families) {
        const option = document.createElement('option');
        option.value = family.id;
        option.textContent = family.name;
        familyId.append(option);
    }

    // create an option tag

    // set the option's value and text content

    // and append the option to the select
});


checkAuth();

logoutButton.addEventListener('click', () => {
    logout();
});
