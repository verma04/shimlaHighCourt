var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { AuthenticationError, UserInputError } = require('apollo-server');
const Post = require('../../models/Post');
const checkAuth = require('../../util/checkAuth');
module.exports = {
    Query: {
        getPosts(_, { body }, context) {
            return __awaiter(this, void 0, void 0, function* () {
                const user = checkAuth(context);
                console.log(user);
                try {
                    const posts = yield Post.find().sort({ createdAt: -1 });
                    return posts;
                }
                catch (err) {
                    throw new Error(err);
                }
            });
        },
        getPost(_, { postId }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const post = yield Post.findById(postId);
                    if (post) {
                        return post;
                    }
                    throw new Error('Post not found');
                }
                catch (err) {
                    throw new Error(err);
                }
            });
        },
    },
    Mutation: {
        createPost(_, { body }, context) {
            return __awaiter(this, void 0, void 0, function* () {
                const user = checkAuth(context);
                if (body.trim() === '') {
                    throw new Error('Post body must not be empty');
                }
                // at this point, a user definitely exists and is authorized (otherwise error would be thrown in checkAuth)
                const newPost = new Post({
                    body,
                    user: user.id,
                    username: user.username,
                    createdAt: new Date().toISOString(),
                });
                const post = yield newPost.save();
                context.pubsub.publish('NEW_POST', {
                    newPost: post,
                });
                return post;
            });
        },
        deletePost(_, { postId }, context) {
            return __awaiter(this, void 0, void 0, function* () {
                const user = checkAuth(context);
                // make sure it is the same user's own post
                try {
                    const post = yield Post.findById(postId);
                    if (user.username === post.username) {
                        yield post.delete();
                        return 'Post deleted successfully';
                    }
                    // it isn't the user's own post
                    throw new AuthenticationError('Action not allowed');
                }
                catch (err) {
                    throw new Error(err);
                }
            });
        },
        likePost(_, { postId }, context) {
            return __awaiter(this, void 0, void 0, function* () {
                const { username } = checkAuth(context);
                const post = yield Post.findById(postId);
                if (post) {
                    if (post.likes.find((like) => like.username === username)) {
                        // post is already "liked" by this user, so we will "un-like" it for them
                        post.likes = post.likes.filter((like) => like.username !== username);
                    }
                    else {
                        // not "liked" yet, so we will "like" it for this user
                        post.likes.push({
                            username,
                            createdAt: new Date().toISOString(),
                        });
                    }
                    yield post.save();
                    return post;
                }
                // post doesn't exist
                throw new UserInputError('Post not found');
            });
        },
    },
    Subscription: {
        newPost: {
            subscribe: (_, __, { pubsub }) => pubsub.asyncIterator('NEW_POST'),
        },
    },
};
//# sourceMappingURL=posts.js.map