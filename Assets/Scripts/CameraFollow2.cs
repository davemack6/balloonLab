using UnityEngine;
using System.Collections;

public class CameraFollow2 : MonoBehaviour {

    public GameObject objectToFollow;
    private Vector3 origOffset;
    
    public float followSpeed = 0.5f;
	private GameObject test;

	// Use this for initialization
	void Start () {
        /*
		iPhoneKeyboard.autorotateToPortrait = false; 
		iPhoneKeyboard.autorotateToPortraitUpsideDown = false; 
		iPhoneKeyboard.autorotateToLandscapeRight = false; 
		iPhoneKeyboard.autorotateToLandscapeLeft = false;
        */
		test = GameObject.Find("BalloonPlayer");
		objectToFollow = test;

        origOffset = - objectToFollow.transform.position + transform.position;




		Debug.Log("objectToFollow. = " + objectToFollow);
		Debug.Log("objectToFollow.transform.position = " + test.transform.position);
		Debug.Log("origOffset. = " + origOffset);

	}
	
	// Update is called once per frame
	void Update() {
		//Debug.Log("objectToFollow.transform.position = " + test.transform.position);

        float z = transform.position.z;
		//Debug.Log("x = " + x);
        transform.position = Vector3.Lerp(transform.position, objectToFollow.transform.position + origOffset, Time.smoothDeltaTime * followSpeed);
		//Debug.Log("Vector3.Lerp(transform.position, objectToFollow.transform.position + origOffset, Time.smoothDeltaTime * followSpeed) = " + Vector3.Lerp(transform.position, objectToFollow.transform.position + origOffset, Time.smoothDeltaTime * followSpeed));
		transform.position = new Vector3(transform.position.x, transform.position.y, z);

	}

    
}
